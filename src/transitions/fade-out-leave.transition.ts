import { Animation, PageTransition } from 'ionic-angular';

export class ModalFadeOutLeaveTransition extends PageTransition {

  public init() {
    const ele = this.leavingView.pageRef().nativeElement;
    const wrapper = new Animation(this.plt, ele.querySelector('.modal-wrapper'));
    const contentWrapper = new Animation(this.plt, ele.querySelector('.wrapper'));

    wrapper.beforeStyles({ 'transform': 'scale(1)', 'opacity': 0.95 });
    wrapper.fromTo('transform', 'scale(1)', 'scale(1)');
    wrapper.fromTo('opacity', 0.95, 0);

    this
      .element(this.leavingView.pageRef())
      .duration(500)
      .easing('cubic-bezier(.1, .7, .1, 1)')
      .add(contentWrapper)
      .add(wrapper);
  }
}
