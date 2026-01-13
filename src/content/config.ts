import { defineCollection, z } from 'astro:content';

const plessi = defineCollection({
	type: 'content',
	schema: z.object({
		name: z.string(),
		type: z.enum(['infanzia', 'primaria', 'secondaria']),
		description: z.string(),
		coverImage: z.string().optional(),
		address: z.string(),
        order: z.number().default(99),
	}),
});

const progetti = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		plesso: z.string(), // Reference to plessi slug or name
		description: z.string(),
		date: z.date(),
		coverImage: z.string().optional(),
		tags: z.array(z.string()).optional(),
	}),
});

const opendays = defineCollection({
    type: 'content',
    schema: z.object({
        date: z.date(),
        time: z.string(),
        location: z.string(),
        plesso: z.string().optional(), // Slug del plesso collegato
        labs: z.array(z.string()).optional(),
        images: z.array(z.string()).optional(), // Array di percorsi immagini
        active: z.boolean().default(true),
        bookingLink: z.string().optional(), // In case we use external forms
    })
})

export const collections = { plessi, progetti, opendays };
