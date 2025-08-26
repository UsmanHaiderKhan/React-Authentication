export function getAuthToken() {
    const token = localStorage.getItem('token');
    return token;
}
export function tokenLoader() {
    const token = getAuthToken();
    if (!token) {
        throw new Response('', {
            status: 401,
            statusText: 'Unauthorized'
        });
    }
    return token;
}
