export const getPerView = (width: number | undefined) => {
  if (Number(width) < 640) {
    return 1;
  }

  if (Number(width) < 1024) {
    return 2;
  }

  if (Number(width) < 1280) {
    return 2.5;
  }

  if (Number(width) < 1440) {
    return 3;
  }

  return 3.5;
};

export const getPerViewForReviews = (width: number | undefined) => {

  if (Number(width) < 1024) {
    return 1;
  }

  if (Number(width) < 1280) {
    return 2;
  }

  return 3;
};
