const Utils = $.fn.bootstrapTable.utils

$.extend($.fn.bootstrapTable.defaults, {
  containerStyle: false,
  containerStyleClass: 'card',
  containerStyleToolbarClass: 'card-header',
  containerStyleTableContainerClass: 'card-body',
  containerStylePaginationClass: 'card-footer'
})

$.BootstrapTable = class extends $.BootstrapTable {

  containerStyleSupported () {
    return this.options.containerStyle
  }

  initContainer () {
    super.initContainer()

    if (!this.containerStyleSupported()) {
      return
    }

    this.$container.addClass(this.options.containerStyleClass)
    // this.$tableContainer
    this.$toolbar.addClass(this.options.containerStyleToolbarClass)
    this.$tableContainer.addClass(this.options.containerStyleTableContainerClass)
    this.$pagination.addClass(this.options.containerStylePaginationClass)
  }
}
