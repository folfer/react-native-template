export const isEmptyFunctions = () => {
    const isEmptyObject = (obj) => (
        Object.keys(obj).length === 0
    )
    
  return { isEmptyObject };
};
