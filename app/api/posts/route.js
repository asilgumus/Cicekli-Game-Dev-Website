import { NextResponse } from 'next/server';
<<<<<<< HEAD
import { savePost, updatePost, getPostById } from '@/lib/data';
=======
import { savePost } from '@/lib/data';
>>>>>>> a271d8d5cec5f7504332e91aa5f8619fd93e98d2

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
<<<<<<< HEAD

export async function PUT(request) {
    try {
        const body = await request.json();

        // Simple validation
        if (!body.id || !body.title || !body.content || !body.type) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const updatedPost = updatePost(body.id, {
            title: body.title,
            excerpt: body.excerpt,
            content: body.content,
            type: body.type,
            author: body.author || 'Admin'
        });

        return NextResponse.json({ success: true, post: updatedPost });
    } catch (error) {
        console.error('Error updating post:', error);
        if (error.message === 'Post not found') {
            return NextResponse.json({ error: 'Post not found' }, { status: 404 });
        }
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (id) {
            const post = getPostById(id);
            if (!post) {
                return NextResponse.json({ error: 'Post not found' }, { status: 404 });
            }
            return NextResponse.json({ success: true, post });
        }

        return NextResponse.json({ error: 'ID parameter required' }, { status: 400 });
    } catch (error) {
        console.error('Error fetching post:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
=======
>>>>>>> a271d8d5cec5f7504332e91aa5f8619fd93e98d2
