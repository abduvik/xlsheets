type MemoizedContent = any;

const memoizedContent: MemoizedContent = {};

export const memoize = (cellId: string, atomFactory: any) => {
  if (memoizedContent[cellId]) {
    return memoizedContent[cellId];
  }

  memoizedContent[cellId] = atomFactory();

  return memoizedContent[cellId];
};
