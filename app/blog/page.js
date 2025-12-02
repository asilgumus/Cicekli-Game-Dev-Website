import React from 'react';
import { getBlogPosts } from '@/lib/data';
import BlogClient from './BlogClient';

export default function Blog() {
    const posts = getBlogPosts();

    return <BlogClient posts={posts} />;
}
