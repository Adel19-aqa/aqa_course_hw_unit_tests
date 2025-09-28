type User = {
  name: string;
  role: 'QA' | 'AQA';
  isActive: boolean;
};
const user: User = {
  name: 'Alla',
  role: 'QA',
  isActive: true,
};

function getKeyByValue<T extends object, V>(
  obj: T,
  value: V
): keyof T | undefined {
  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
}

const qaKey = getKeyByValue(user, 'QA');
console.log(qaKey);
const aqaKey = getKeyByValue(user, 'AQA');
console.log(aqaKey);