import { AuthError } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		const { error } = await supabase.auth.signInWithPassword({ email, password });

		if (error instanceof AuthError) {
			return fail(400, {
				error: 'Invalid email or password'
			});
		} else if (error) {
			return fail(400, {
				error: 'Server error. Please try again later.'
			});
		}

		throw redirect(303, '/app');
	}
};
