let 
  $filter = $('.smart-filter--check'),
  $filterReset = $('.smart-filter--check--reset'),
  $filterHeader = $('.smart-filter--drop--heading'),
  $clear = $('.smart-filter--form--controls__clear'),
  $form = $('.smart-filter--form'),
  $collapse = $('.smart-filter--form--controls__collapse');

function _selectFilter () {
  $filter.on('change', function () {
    let 
      $this = $(this),
      $parent = $this.closest('.smart-filter--label'),
      $thisFilter = $this.closest('.smart-filter--item'),
      $heading = $thisFilter.find('.smart-filter--drop--heading');
    $parent.addClass('smart-filter--label__selected');
    if($this.prop('checked')) {
      let 
        $addText = $this.val(),
        $oldText = $heading.text();
      if($thisFilter.hasClass('filter__changed')) {
        $heading.text($oldText + ', ' + $addText);
      } else {
        $heading.text($addText);
      }
    }
    $this.prop('checked', true);
    $thisFilter.addClass('filter__changed');
  })
}

function _resetFilter () {
  $filterReset.on('change', function () {
    let
      $this = $(this),
      $thisFilter = $this.closest('.smart-filter--item'),
      $heading = $thisFilter.find('.smart-filter--drop--heading'),
      $thisFilterItems = $thisFilter.find('.smart-filter--check');
    $thisFilterItems.prop('checked', false).closest('.smart-filter--label').removeClass('smart-filter--label__selected');
    $heading.text('Все');
    $thisFilter.removeClass('filter__changed');
  })
}

function _openPropsFilter () {
  $filterHeader.click(function () {
    let 
      $slide = $(this).next(),
      $parent = $(this).closest('.smart-filter--item');
    $slide.slideToggle();
    $parent.toggleClass('smart-filter--item__open');
  });
}

function _clearForm () {
  $clear.click(function () {
    let
      $thisFilter = $('.smart-filter--item'),
      $heading = $('.smart-filter--drop--heading'),
      $thisFilterItems = $('.smart-filter--check');
    $thisFilterItems.prop('checked', false).closest('.smart-filter--label').removeClass('smart-filter--label__selected');
    $heading.text('Все');
    $thisFilter.removeClass('filter__changed');
    $('.smart-filter--item').removeClass('smart-filter--item__open');
    $('.smart-filter--drop--slider').slideUp();
  });
}

function _collapseFilter () {
  $collapse.click(function () {
    $('.smart-filter').toggleClass('smart-filter__hidden');
    $form.slideToggle();
  });
}

$(document).ready(
  _selectFilter(),
  _resetFilter(),
  _openPropsFilter(),
  _clearForm(),
  _collapseFilter()
)