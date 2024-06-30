import React from 'react'
import HeroContent from './components/HeroContent'
import Navbar from './components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import CategoryCard from './components/CategoryCard'
import categories from '../data/categories.json'

const Home = () => {
	return (
		<main>
			<section
				className='w-screen min-w-full h-[65vh] md:h-[70vh] bg-hero-bg bg-center relative mb-20'
				style={{ backgroundSize: 'cover' }}>
				<Navbar />
				<HeroContent
					position='top-[25%] left-8 w-1/2 lg:w-1/3'
					title='Välkommen till Gårdsbutiken'
					subheading='Unika smycken och handplockade konsthantverk i Stenegårds kulturmiljö'
				/>
			</section>

			<section className='mx-auto font-lora w-[70vw] lg:w-[60vw] lg:mb-20'>
				<h2 className='font-medium text-base sm:text-xl md:text-xl'>
					Om Gårdsbutiken på Stenegård
				</h2>
				<div>
					<p className='text-xs sm:text-sm'>
						Välkommen till Gårdsbutiken, en oas av kreativitet och skönhet belägen på Stenegård i
						Järvsö – en plats rik på kultur och tradition. I vår charmiga gårdsbutik möts du av
						värmen från vår ägare Anna-Maria, vars passion för design lyser igenom i varje detalj.
					</p>
					<p className='text-xs sm:text-sm'>
						På Gårdsbutiken är vår ambition att du ska finna något som tilltalar just dig. Besök oss
						online eller på plats i Stenegård för en inspirerande shoppingupplevelse där tradition
						möter nytänkande.
					</p>
					<p className='text-xs sm:text-sm'>
						I hjärtat av vårt utbud står Anna-Marias egenkollektion av silver smycken. Varje ring,
						halsband, armband och örhänge är designat med en unik känsla för stil och skönhet.
						Smyckena tillverkas exklusivt för Gårdsbutiken av noggrant utvalda hantverkare i Mexikos
						landsbygd, vilket garanterar en exceptionell kvalitet och originalitet.
					</p>
					<p className='text-xs sm:text-sm'>
						Förutom våra exklusiva silver smycken erbjuder vi ett brett sortiment av konsthantverk.
						Upptäck våra textilier, från vackra dukar till hemtrevliga textilier, samt vårt urval av
						keramikvaser och ljusstakar som ger ditt hem en personlig touch.
					</p>

					<p className='text-xs sm:text-sm'>
						Modeentusiaster kan glädja sig åt vårt samarbete med den välkända lokala designern Ulla
						Jacobsson. Hennes kollektion Ulla Jacobsson Design finns tillgänglig här hos oss, och
						erbjuder kläder som kombinerar traditionellt hantverk med modern design.
					</p>
					<p className='text-xs sm:text-sm'>
						Missa inte heller chansen att utforska andra våningen där vi samlar unika fynd från
						auktioner över hela Sverige – en verklig skattkammare för dig som söker det där
						speciella.
					</p>
				</div>

				<p className='text-xs sm:text-sm'>Varmt välkommen!</p>

				<div className='flex items-center gap-3 md:pt-8 md:pb-20'>
					<span>
						<Image
							src='/images/silver/anna_maria.avif'
							alt='profile'
							width={80}
							height={80}
							className='w-16 h-16 rounded-full'
						/>
					</span>
					<div className='flex flex-col'>
						<span className='font-semibold inline-block lg:text-sm'>Anna-Maria Öberg</span>
						<span className='inline-block lg:text-sm'>info@gardsbutiken</span>
					</div>
				</div>
			</section>

			<section className='bg-navbar-link-hover-color py-16'>
				<section className='mx-auto font-lora w-[70vw] lg:w-[80vw] lg:mb-16'>
					<h2 className='font-medium text-base sm:text-xl md:text-xl'>AnnaMaria Silverdesign</h2>
					<p className='text-xs sm:text-sm'>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit, a. Labore vel nisi
						optio assumenda eius amet quidem rem a in, tempora quas officia eum, vitae illum magni.
						Aut, sapiente. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis ipsam
						voluptas harum aperiam laborum itaque iusto at in a fugit! Porro delectus nemo, nam
						consequatur ea voluptatibus!{' '}
					</p>

					<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4'>
						{categories.map((category) => {
							return <CategoryCard key={category.name} category={category} />
						})}
					</div>
				</section>
			</section>

			<section
				className='w-screen min-w-full h-[65vh] md:h-[75vh] bg-cta-bg bg-top relative mb-20'
				style={{ backgroundSize: 'cover', position: 'relative' }}>
				<div
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: 'rgba(0, 0, 0, 0.4)',
						backdropFilter: 'blur(4px)',
						zIndex: 1,
					}}></div>
				<HeroContent
					position='top-[30%] right-36 w-1/2 lg:w-1/3 z-50'
					title='AnnaMaria Silverdesign'
					subheading='Smycken för människor som går sin egen väg.'
					text='amdesign.se'
				/>
			</section>

			<section className='py-16 mb-16'>
				<div className='mx-auto font-lora w-[70vw] lg:w-[80vw]'>
					<h2 className='font-medium text-base sm:text-xl md:text-xl'>Ulla Jacobsson Design</h2>

					<div className='grid grid-cols-2 gap-4'>
						<div>
							<p className='text-xs sm:text-sm'>
								På Gårdsbutiken är vi stolta över vårt samarbete med den välkända lokala designern
								Ulla Jacobsson. Hennes kollektion, Ulla Jacobsson Design, är en hyllning till det
								traditionella hantverket kombinerat med modern design. Varje plagg i hennes
								kollektion reflekterar hennes passion för kvalitet och estetik, vilket gör dem både
								tidlösa och aktuella.
							</p>
							<section className='w-full h-[8vh] text-sm flex items-center'>
								<p
									className='flex items-center text-sm gap-3 font-light'
									style={{ transform: 'translateY(25%)' }}>
									{/* <Link href='/' className='hover:font-medium'>
										www.ullajacobssondesign.se
									</Link>{' '}
									<span className='inline-block h-[6px] w-[6px] rounded-full bg-[#333]'></span>{' '} */}
									<Link href='mailto:ulla@ullajacobssondesign.se' className='hover:font-medium'>
										ulla@ullajacobssondesign.se
									</Link>
								</p>
							</section>
						</div>
						<div className='w-[25vw] grid grid-cols-2 gap-4'>
							<Image
								src='/images/UJD/hero-fabric.jpg'
								alt='profile'
								width={200}
								height={200}
								className='h-[28vh] rounded-md object-cover'
							/>

							<Image
								src='/images/UJD/beige_shirt.jpg'
								alt='profile'
								width={200}
								height={200}
								className='h-[28vh] rounded-md object-cover'
							/>
						</div>
					</div>
				</div>
			</section>

			<section className='pt-16 pb-32 bg-navbar-link-hover-color'>
				<div className='mx-auto font-lora w-[70vw] lg:w-[80vw]'>
					<h2 className='font-medium text-base sm:text-xl md:text-xl'>Hantverk och auktion</h2>
					<div className='grid grid-cols-2 gap-8'>
						<div>
							<Image
								src='/images/arts_and_crafts/ceramics.jpg'
								alt='profile'
								width={200}
								height={200}
								className='w-full h-[45vh] rounded-md object-cover'
							/>
							<h2 className='my-4 font-medium text-base sm:text-xl md:text-base'>Konsthantverk</h2>
							<p className='mt-2 text-xs sm:text-sm'>
								I vår sektion för konsthantverk finner du en samling av unika och vackra föremål som
								förgyller ditt hem. Upptäck våra handgjorda textilier, från vackra dukar till
								hemtrevliga kuddar, samt vårt urval av keramikvaser och ljusstakar. Varje produkt är
								noggrant utvald för att ge ditt hem en personlig och varm touch, samtidigt som vi
								bevarar traditionellt hantverk.
							</p>
						</div>
						<div>
							<Image
								src='/images/auction/auction.jpg'
								alt='profile'
								width={200}
								height={200}
								className='w-full h-[45vh] rounded-md object-cover'
							/>
							<h2 className='my-4 font-medium text-base sm:text-xl md:text-base'>Second hand</h2>
							<p className='mt-2 text-xs sm:text-sm'>
								På övervåningen i Gårdsbutiken väntar en verklig skattkammare för dig som älskar
								unika fynd. Här samlar vi skatter från auktioner över hela Sverige – från antika
								möbler till dekorativa föremål. Utforska vårt utbud och upptäck det där speciella
								föremålet som kan ge ditt hem en unik karaktär och charm.
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

export default Home
