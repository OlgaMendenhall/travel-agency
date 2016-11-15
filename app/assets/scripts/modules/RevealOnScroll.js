import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor(elems, offset) {
		this.itemsToReveal = elems;
		this.offsetPercentage = offset;
		this.hideInitially();
		this.createWaypoints();		
	}

	hideInitially() {
		this.itemsToReveal.addClass("reveal-item");
	}

	createWaypoints() {   // for each of our 4 sections
		var that = this;
		this.itemsToReveal.each(function() {
			var currentItem = this;
			new Waypoint({
				element: currentItem,    // currentItem here - is a DOM element, that we need to reach while scrolling down
				handler: function() {    // this is what we want to happen when that element is scrolled to
					$(currentItem).addClass("reveal-item--is-visible");
				},
				offset: that.offsetPercentage   // offset 85% means that each section reveals as soon as we crossed 85% of the viewport
			});
		});
	}
}

export default RevealOnScroll;