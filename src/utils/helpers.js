export const createWidgetKey = (widget) => {
  const widgetKey = `${widget.type}-${widget.id}`;

  return widgetKey.replace(/[\s-]/g, '_').toLowerCase();
};
