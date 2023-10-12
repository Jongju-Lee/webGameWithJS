const test = () => {
  let result = "";
  if (a) {
    if (!b) {
      result = "c";
    }
  } else {
    result = "a";
  }
  result += "b";
  return result;
};

const test1 = () => {
  let result = "";
  if (!a) {
    result = "a";
    result += "b";
    return result;
  }
  if (!b) {
    result = "c";
  }
  result += "b";
  return result;
};

const test3 = () => {
  let result = "";
  if (!a) {
    result = "a";
    result += "b";
    return result;
  }
  if (!b) {
    result = "c";
  }
  result += "b";
  return result;
};

const test4 = () => {
  let result = "";
  if (!a) {
    result = "a";
    result += "b";
    return result;
  }
  if (!b) {
    result = "c";
  }
  result += "b";
  return result;
};
