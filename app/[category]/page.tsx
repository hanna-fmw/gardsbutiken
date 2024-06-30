import Image from 'next/image'
import Navbar from '@/app/components/Navbar'
import items from '@/data/db.json'
import HeroContent from '../components/HeroContent'
import ItemCard from '../components/ItemCard'

type Props = {
	params: {
		category: string
	}
}

export default function CategoryPage({ params: { category } }: Props) {
	const filteredItems = items.filter((item) => item.category === category)

	let categoryImage = () => {
		switch (category) {
			case 'ringar':
				return 'hero_rings.avif'
			case 'orhangen':
				return 'hero_earrings.avif'
			case 'halsband':
				return 'hero_necklaces.avif'
			case 'armband':
				return 'hero_bracelets.avif'
			default:
				return 'cta_amdesign.avif'
		}
	}

	return (
		<main>
			<section
				style={{
					backgroundImage: `url('/images/silver/${category}/${categoryImage()}')`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
				className='relative w-screen min-w-full h-[60vh]'>
				<Navbar />
				<div
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: 'rgba(0, 0, 0, 0.4)',
						backdropFilter: 'blur(4px)',
						zIndex: 10,
					}}></div>
				<HeroContent
					position='bottom-[30%] left-8 w-1/2 lg:w-1/3 z-20'
					title={
						category === 'orhangen'
							? 'Örhängen'
							: category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()
					}
					subheading='Smycken för människor som går sin egen väg.'
				/>
			</section>
			<section className='mx-auto font-lora w-[70vw] md:w-[80vw] md:mb-16'>
				<h3 className='font-medium text-base md:text-xl md:mt-10'>
					Design av Anna-Maria Silverdesign
				</h3>
				<p className='text-xs sm:text-sm'>
					Detta är endast ett urval. Fler smycken finns på Gårdsbutiken och i{' '}
					<a
						href='https://amdesign.se'
						target='_blank'
						rel='noopener noreferrer'
						className='hover:font-medium underline underline-offset-2 text-[#838D71]'>
						onlinebutiken
					</a>
					.
				</p>
				{category === 'ringar' ? (
					<p className='text-xs sm:text-sm'>
						Alla ringar är handtillverkade, unika och finns i endast några få exemplar. Med design
						från AnnaMaria Silverdesign vet du att du får en ring som sticker ut, tar plats och
						talar för sig självt. Se ett urval av ringar nedan – alla tillverkade i återvunnet
						silver.
					</p>
				) : category === 'orhangen' ? (
					<p className='text-xs sm:text-sm'>
						Alla örhängen är handtillverkade, unika och finns i endast några få exemplar. Med design
						från AnnaMaria Silverdesign vet du att du får ett halsband som sticker ut, tar plats och
						talar för sig självt. Se ett urval av örhängen nedan – alla tillverkade i återvunnet
						silver.
					</p>
				) : category === 'halsband' ? (
					<p className='text-xs sm:text-sm'>
						Alla halsband är handtillverkade, unika och finns i endast några få exemplar. Med design
						från AnnaMaria Silverdesign vet du att du får ett smycke som sticker ut, tar plats och
						talar för sig självt. Se ett urval av halsband och halsringar nedan – alla tillverkade i
						återvunnet silver.
					</p>
				) : category === 'armband' ? (
					<p className='text-xs sm:text-sm'>
						Alla armband är handtillverkade, unika och finns i endast några få exemplar. Med design
						från AnnaMaria Silverdesign vet du att du får ett smycke som sticker ut, tar plats och
						talar för sig självt. Se ett urval av armband och armringar nedan – alla tillverkade i
						återvunnet silver.
					</p>
				) : (
					<p className='text-xs sm:text-sm'>
						Du hittar hela sortimentet av smycken på{' '}
						<a href='https://amdesign.se' target='_blank' rel='noopener noreferrer'>
							www.amdesign.se
						</a>
						.
					</p>
				)}

				<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4'>
					{filteredItems.map((item) => (
						<ItemCard key={item.id} item={item} />
					))}
				</div>
			</section>
		</main>
	)
}
