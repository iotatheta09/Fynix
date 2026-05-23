export const getEnv = (
  key: string,
  defaultValue?: string
): string => {
  const value = process.env[key];

  if (!value) {
    if (defaultValue !== undefined) {
      return defaultValue;
    }

    throw new Error(`Missing environment variable: ${key}`);
  }

  return value;
};

export const getEnvNumber = (
  key: string,
  defaultValue?: number
): number => {
  const value = process.env[key];

  if (!value) {
    if (defaultValue !== undefined) {
      return defaultValue;
    }

    throw new Error(`Missing environment variable: ${key}`);
  }

  const parsed = Number(value);

  if (Number.isNaN(parsed)) {
    throw new Error(`${key} must be a number`);
  }

  return parsed;
};


