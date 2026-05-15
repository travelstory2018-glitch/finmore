
export function generateUser() {
    const timestamp = Date.now();



    return {
        name: `Ivan_${timestamp}`,
        email: `test_${timestamp}@mail.com`,
        password: 'Test12345!'
    };
}

