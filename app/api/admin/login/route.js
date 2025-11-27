import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();
        const { username, password } = body;

        // Mock authentication
        // In a real app, you would check against a database and hash passwords
        if (username === 'admin' && password === 'password123') {
            const response = NextResponse.json({ success: true });

            // Secure cookie settings
            response.cookies.set('auth_token', 'mock_token_secure_123', {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 60 * 60 * 24 * 7, // 1 week
                path: '/',
            });

            return response;
        }

        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
