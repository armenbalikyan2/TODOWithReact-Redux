export const getData = () => {
  let data = [];
  for (let i = 0; i < 5; i++) {
    data.push({
      key: i.toString(),
      name: `Task ${i}`,
    });
  }
  return data;
};
