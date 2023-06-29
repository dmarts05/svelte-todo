import { fail } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, url, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		const { error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${url.origin}/auth/callback`
			}
		});

		if (error) {
			return fail(500, {
				error: 'Server error. Please try again later.'
			});
		}

		return {
			status: 200,
			body: {
				message: 'Registration successful. Please check your email for the confirmation link.'
			}
		};
	}
};
