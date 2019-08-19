export default function reducer(state, action) {
  switch (action.type) {
    case "msg":
      return [...state, action.payload];
    case "rest":
      return [];
    default:
      return [];
  }
}
