// Функция: snake_case → camelCase
export function toCamelCase(str: string) {
    return str.replace(/_([a-z])/g, (_, char) => char.toUpperCase());
}

// Рекурсивное преобразование всех ключей объекта / массива
export function transformKeysToCamel<T>(data: any): T {
    if (Array.isArray(data)) {
        return data.map(item => transformKeysToCamel(item)) as T;
    }

    if (data !== null && typeof data === 'object') {
        return Object.keys(data).reduce((acc: any, key) => {
            const camelKey = toCamelCase(key);
            acc[camelKey] = transformKeysToCamel(data[key]);
            return acc;
        }, {}) as T;
    }

    return data as T;
}