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
				className='w-screen min-w-full h-[65vh] mb-10 sm:h-[75vh] md:h-[70vh] bg-hero-bg bg-center relative mb:mb-20'
				style={{ backgroundSize: 'cover' }}>
				<Navbar />
				<div
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: 'rgba(0, 0, 0, 0.4)',
						zIndex: 10,
					}}></div>
				<HeroContent
					position='top-[20%] px-16 md:top-[25%] md:w-1/2 lg:w-1/3 lg:left-8 z-20'
					titleMd='Välkommen till Gårdsbutiken'
					title='Välkommen till Gårdsbutiken på Stenegård'
					subheadingMdText='Unika smycken och handplockade konsthantverk i Stenegårds kulturmiljö'
					logo={true}
				/>
			</section>

			<section className='mx-auto font-lora mt-6 mb-10 lg:mt-10 lg:mb-14 w-[80vw] md:w-[70vw] lg:w-[60vw] md:my-20'>
				<h2 className='font-medium text-base md:text-xl'>Om Gårdsbutiken på Stenegård</h2>
				<div className='hidden md:block'>
					<p className='text-xs sm:text-sm'>
						Välkommen till Gårdsbutiken, en oas av kreativitet och skönhet belägen på Stenegård i
						Järvsö – en plats rik på kultur och tradition. I vår charmiga gårdsbutik möts du av
						värmen från vår ägare AnnaMaria, vars passion för design lyser igenom i varje detalj.
					</p>
					<p className='text-xs sm:text-sm'>
						På Gårdsbutiken är vår ambition att du ska finna något som tilltalar just dig. Besök oss
						online eller på plats i Stenegård för en inspirerande shoppingupplevelse där tradition
						möter nytänkande.
					</p>
					<p className='text-xs sm:text-sm'>
						I hjärtat av vårt utbud står AnnaMarias egenkollektion av silver smycken. Varje ring,
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
						Vi har också ett fint samarbete med den lokala designern Ulla Jacobsson och ni hittar
						ett urval av hennes kläder i kollektionen Ulla Jacobsson Design hos oss.
					</p>
					<p className='text-xs sm:text-sm'>
						Missa inte heller chansen att utforska andra våningen där vi samlar unika fynd från
						auktioner över hela Sverige – en verklig skattkammare för dig som söker det där
						speciella.
					</p>
				</div>
				<div>
					<p className='text-xs sm:text-sm'>
						Välkommen till Gårdsbutiken på Stenegård i Järvsö, där kultur möter kreativitet. Ägaren
						AnnaMarias passion för design genomsyrar allt.
					</p>
					<p className='text-xs sm:text-sm'>
						Upptäck AnnaMarias unika silverkollektion och vårt utbud av konsthantverk, textilier och
						keramik. Allt är noga utvalt för högsta kvalitet.
					</p>
					<p className='text-xs sm:text-sm'>
						Vi samarbetar med designern Ulla Jacobsson, vars kollektion finns här och erbjuder en
						mix av tradition och modern design.
					</p>
				</div>

				<p className='text-xs sm:text-sm'>Varmt välkommen!</p>

				<div className='flex items-center gap-3 mt-8'>
					<span>
						<Image
							src='/images/silver/anna_maria.avif'
							alt='profile'
							width={80}
							height={80}
							className='w-12 h-12 md:w-16 md:h-16 rounded-full'
						/>
					</span>
					<div className='flex flex-col'>
						<span className='inline-block text-xs lg:text-sm'>AnnaMaria Öberg</span>
						<a href='mailto:info@amdesign.se' className='text-xs mb-1 block lg:text-sm'>
							info@amdesign.se
						</a>
					</div>
				</div>
			</section>

			<section className='bg-navbar-link-hover-color pt-6 pb-14 md:pt-10 md:pb-20'>
				<section className='mx-auto font-lora w-[90vw] sm:w-[65vw] md:w-[80vw] lg:w-[80vw]'>
					<h2 className='font-medium text-base md:text-xl'>AM Design</h2>
					<p className='text-xs sm:text-sm'>
						AM Design är silversmeden Maria Öbergs varumärke där hon säljer sina unika silververk.
						Klicka på kategorierna nedan för att se ett representativt urval, och klicka dig gärna
						vidare till onlinebutiken där du kan utforska hela sortimentet. Det finns också mycket
						mer att upptäcka i Gårdsbutiken.
					</p>

					<div className='grid gap-2 grid-cols-2 md:mx-auto md:w-[70vw] md:grid-cols-2 md:gap-x-2 lg:grid-cols-4 lg:w-[80vw] lg:gap-2'>
						{categories.map((category) => {
							return <CategoryCard key={category.name} category={category} />
						})}
					</div>
				</section>
			</section>

			<section
				className='w-screen min-w-full h-[80vh] md:h-[85vh] bg-cta-bg bg-top relative md:mb-20'
				style={{ backgroundSize: 'cover', position: 'relative' }}>
				<div
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: 'rgba(0, 0, 0, 0.4)',
						backdropFilter: 'blur(3px)',
						zIndex: 1,
					}}></div>
				<HeroContent
					position='top-[30%] right-4 w-[60%] md:right-36 w-[40%] md:w-1/3 z-50'
					title='AM Design'
					subheadingText='Smycken för människor som går sin egen väg.'
					text='amdesign.se'
				/>
			</section>

			<section className='mt-12 mb-14 md:my-20 lg:my-24'>
				<div className='mx-auto font-lora w-[80vw]'>
					<h2 className='font-medium text-base md:text-xl'>Ulla Jacobsson Design</h2>

					<div className='md:grid md:grid-cols-2 md:gap-10 lg:gap-4'>
						<div>
							<p className='text-xs sm:text-sm'>
								På Gårdsbutiken är vi stolta över vårt samarbete med den lokala designern Ulla
								Jacobsson. Hennes kollektion, Ulla Jacobsson Design, är en hyllning till det
								traditionella hantverket kombinerat med modern design. Varje plagg i hennes
								kollektion reflekterar hennes passion för kvalitet och estetik, vilket gör dem både
								tidlösa och aktuella.
							</p>
							<section className='w-full h-[8vh] text-sm flex items-center mb-4'>
								<p
									className='flex items-center font-medium text-xs md:font-normal md:text-sm gap-3'
									style={{ transform: 'translateY(25%)' }}>
									{/* <Link href='/' className='hover:font-medium'>
										www.ullajacobssondesign.se
									</Link>{' '}
									<span className='inline-block h-[6px] w-[6px] rounded-full bg-[#333]'></span>{' '} */}
									<a href='mailto:ulla@ullajacobssondesign.se' className='hover:font-medium'>
										ulla@ullajacobssondesign.se
									</a>
								</p>
							</section>
						</div>
						<div className='flex justify-between gap-2 sm:w-[35vw] lg:w-[25vw] md:grid md:grid-cols-2 md:gap-4'>
							<Image
								src='/images/UJD/hero-fabric.jpg'
								alt='profile'
								width={200}
								height={200}
								className='h-[35vh] md:h-[28vh] rounded-md object-cover'
							/>

							<Image
								src='/images/UJD/beige_shirt.jpg'
								alt='profile'
								width={200}
								height={200}
								className='h-[35vh] md:h-[28vh] rounded-md object-cover'
							/>
						</div>
					</div>
				</div>
			</section>

			<section className='pt-6 pb-10 md:pt-10 md:pb-14 bg-navbar-link-hover-color'>
				<div className='mx-auto font-lora w-[80vw]'>
					<h2 className='font-medium text-base sm:text-xl md:text-xl md:mb-6'>
						Hantverk och second hand
					</h2>
					<div className='md:grid md:grid-cols-2 md:gap-8'>
						<div className='mb-8'>
							<Image
								src='/images/arts_and_crafts/ceramics.jpg'
								alt='Bild på hantverk'
								width={200}
								height={200}
								className='w-full h-[45vh] rounded-md object-cover'
							/>
							<h2 className='mt-4 font-medium text-sm mb-1 md:mb-0 md:text-base'>Hantverk</h2>
							<p className='text-xs sm:text-sm'>
								I vår sektion för konsthantverk finner du en samling av unika och vackra föremål som
								förgyller ditt hem. Upptäck våra handgjorda textilier, från vackra dukar till
								hemtrevliga kuddar, samt vårt urval av keramikvaser och ljusstakar. Varje produkt är
								noggrant utvald för att ge ditt hem en personlig och varm touch, samtidigt som vi
								bevarar traditionellt hantverk.
							</p>
						</div>
						<div>
							<Image
								src='/images/auction/second-hand.jpg'
								alt='Bild på second hand'
								width={200}
								height={200}
								className='w-full h-[45vh] rounded-md object-cover'
							/>
							<h2 className='mt-4 font-medium text-sm mb-1 md:mb-0 md:text-base'>Second hand</h2>
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
