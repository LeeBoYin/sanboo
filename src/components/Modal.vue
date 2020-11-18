<template>
	<div :class="{ 'modal--open': isOpen }" class="modal">
		<div ref="modalContent" class="modal__content">
			<a class="modal__close" @click="isOpen && $emit('close')">×</a>
			<!-- header -->
			<div v-if="title" class="modal__header" :class="{ 'modal__header--shadow': !isScrollTop }">
				<div class="modal__title">
					{{ title }}
				</div>
			</div>
			<!-- body -->
			<div ref="modalBody" class="modal__body container-lg p-0">
				<slot name="body"></slot>
			</div>
			<!-- footer -->
			<div v-if="$slots.footer" class="modal__footer" :class="{ 'modal__footer--shadow': !isScrollBottom }">
				<slot name="footer"></slot>
			</div>
		</div>
		<div class="modal__overlay" @click="isOpen && $emit('close')"></div>
	</div>
</template>

<script>
import { lockBodyScroll, unlockBodyScroll } from '@libs/bodyNoScrollByFixed'
export default {
	props: {
		isOpen: {
			type: Boolean,
			default: false,
		},
		title: {
			type: String,
			default: null,
		},
	},
	data() {
		return {
			isScrollTop: true,
			isScrollBottom: true,
		};
	},
	watch: {
		isOpen() {
			this.isOpen ? this.onOpen() : this.onClose();
		},
	},
	mounted() {
		this.setBodyScroll();
		this.addEventHandlers();
		this.initSwipeDown();
		this.detectModalBodyScroll();
	},
	beforeDestroy() {
		this.onClose();
		this.removeEventHandlers();
	},
	methods: {
		addEventHandlers() {
			window.addEventListener('orientationchange', this.detectModalBodyScroll);
			window.addEventListener('resize', this.detectModalBodyScroll);
			this.$refs.modalBody.addEventListener('scroll', this.detectModalBodyScroll);
		},
		clearTransform() {
			const modalContent = this.$refs.modalContent;
			modalContent.style.transition = '';
			modalContent.style.transform = '';
		},
		detectModalBodyScroll() {
			const modalBody = this.$refs.modalBody;
			this.isScrollTop = modalBody.scrollTop <= 0;
			this.isScrollBottom = (modalBody.scrollTop + modalBody.clientHeight >= modalBody.scrollHeight);
		},
		initSwipeDown() {
			let startPoint;
			let lastPoint;
			let currentPoint;
			let deltaY;
			let isDownFromTop;
			let isDraggingDown;
			let isFirstTouchmove;
			let isFromBottom;
			let isFromTop;
			let isSwipingVertically;
			let isUpFromBottom;
			const modal = this.$el;
			const modalContent = this.$refs.modalContent;
			const modalBody = this.$refs.modalBody;
			modal.addEventListener('touchstart', (e) => {
				const isTouchOnBody = modalBody === e.target || modalBody.contains(e.target);
				deltaY = 0;
				isDraggingDown = isSwipingVertically = isDownFromTop = isUpFromBottom = false;
				isFirstTouchmove = true;
				isFromTop = !isTouchOnBody || this.isScrollTop;
				isFromBottom = !isTouchOnBody || this.isScrollBottom;
				startPoint = lastPoint = currentPoint = e.touches[0];
			});
			modal.addEventListener('touchmove', (e) => {
				lastPoint = currentPoint;
				currentPoint = e.touches[0];
				deltaY = currentPoint.clientY - startPoint.clientY;
				isDraggingDown = currentPoint.clientY > lastPoint.clientY;
				if(isFirstTouchmove) {
					isSwipingVertically = Math.abs(currentPoint.clientX - lastPoint.clientX) < Math.abs(currentPoint.clientY - lastPoint.clientY);
					isDownFromTop = isSwipingVertically && isFromTop && deltaY > 0;
					isUpFromBottom = isSwipingVertically && isFromBottom && deltaY < 0;
					isFirstTouchmove = false;
				}
				if(isDownFromTop) {
					// 往下滑收合 modal
					modalContent.style.transform = 'translateY(' + Math.max(deltaY, 0) + 'px)';
					modalContent.style.transition = 'none';
					e.preventDefault();
				}
				if(isUpFromBottom) {
					// 往上滑的反饋
					modalContent.style.transform = 'translateY(-' + Math.pow(-Math.min(deltaY, 0), 0.7) + 'px)';
					modalContent.style.transition = 'none';
					e.preventDefault();
				}
			}, { passive: false });
			modal.addEventListener('touchend', () => {
				if(!isDownFromTop && !isUpFromBottom) {
					return;
				}
				if(isDownFromTop && isDraggingDown && deltaY > 50) {
					// close modal
					this.$emit('close');
				} else {
					// transition back to fully open position
					modalContent.style.transition = '.1s';
					modalContent.style.transform = '';
					modalContent.addEventListener('transitionend', this.clearTransform, {
						once: true,
					});
				}
			});
		},
		onClose() {
			this.setBodyScroll();
			this.clearTransform();
		},
		onOpen() {
			this.setBodyScroll();
			this.$nextTick(this.detectModalBodyScroll);
		},
		removeEventHandlers() {
			window.removeEventListener('orientationchange', this.detectModalBodyScroll);
			window.removeEventListener('resize', this.detectModalBodyScroll);
			this.$refs.modalBody.removeEventListener('scroll', this.detectModalBodyScroll);
		},
		setBodyScroll() {
			this.isOpen ? lockBodyScroll() : unlockBodyScroll();
		},
	},
};
</script>
