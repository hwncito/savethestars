'use server'

import { signIn, signOut } from "@/auth"

export async function handleGoogleLogin (formData) {
    const action = formData.get('action')
    await signIn(action, {redirectTo: '/'})
}

export async function handleLogout () {
    await signOut({redirectTo: '/auth/login'})
}