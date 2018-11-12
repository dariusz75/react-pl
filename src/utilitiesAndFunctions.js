export function isValidNumberInput(e) {
  if (isNaN(parseInt(e.key, 10)) === true) {
    return e.preventDefault();
  }
}

export function isValidName(val) {
  if (val.length > 0) {
    return true;
  } else {
    return false;
  }
}

export function isValidHour(val) {
  if (val.length > 0) {
    return true;
  } else {
    return false;
  }
}

export function isValidMinutes(val) {
  if (val.length > 0) {
    return true;
  } else {
    return false;
  }
}