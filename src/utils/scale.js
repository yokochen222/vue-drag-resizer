// 矩形 按一边长 自动缩放另一边长
export function scale(width, height, distance) {

  const nw = distance + width
  const ratio = (nw - width) / width;
  return {
    width: nw,
    height: height + height * ratio
  }
}