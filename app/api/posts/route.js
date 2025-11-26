import { NextResponse } from 'next/server';
import { savePost } from '@/lib/data';

export async function POST(request) {
    try {
        const body = await request.json();

        // Simple validation
        if (!body.title || !body.content || !body.type) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const newPost = {
            id: Date.now().toString(),
            slug: body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
            date: new Date().toISOString().split('T')[0],
            author: 'Admin', // Hardcoded for now
            ...body
        };

        savePost(newPost);

        return NextResponse.json({ success: true, post: newPost });
    } catch (error) {
        console.error('Error creating post:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
