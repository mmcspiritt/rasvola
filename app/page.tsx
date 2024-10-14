'use client'

import { useState, useRef } from 'react'
import { Instagram, Droplet, Milk } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

export default function Home() {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const menuRef = useRef<HTMLElement>(null);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const content = {
    es: {
      title: "Helados Escarchados",
      subtitle: "Elige entre nuestros deliciosos helados a base de leche o refrescantes helados a base de agua",
      menuButton: "Menú",
      instagramButton: "Síguenos",
      languageToggle: "English",
      footerText: "",
      address: "C. Querétaro 74 Roma Nte., Cuauhtémoc, 06700 Ciudad de México, CDMX",
      heroTitle: "Somos una barra de",
      heroHighlight: "helado escarchado",
      heroTitleEnd: "estilo vintage.",
      products: [
        { name: 'Maria Felix (Nutella)', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-ZEqnyUl0wZcxDRroDEtILLwM0ymUO3.png', type: 'milk', description: 'Helado de coco con mazapán de la Rosa, cubierto con coco rallado y un toque dulce.' },
        { name: 'Frida Kahlo (Mango Enchilado)', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-7jL9Nu9kZ1Dblohlz3SU9TffXAJ71y.png', type: 'water', description: 'Bebida congelada de mango con chamoy, decorada con limón y un toque picante.' },
        { name: 'Édith Piaf (Fresas con Crema)', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website%20-%20Menu%20Grid-tyq9XkG5MqkRhVeJ8SbUuqFC4uqsbq.png', type: 'milk', description: 'Helado rosa en copa de margarita, con crema batida, perlas rosas y una fresa entera.' },
        { name: 'Flor Silvestre (Mazapán)', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-zkzwt35SgAvYURp7Q6lgUe5QuHyTld.png', type: 'milk', description: 'Helado rosa y blanco en copa rosa, decorado con perlas doradas y chispas rosas.' },
        { name: 'Marilyn Monroe (Horchata)', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-fHdFgNPaloPOmKXMEGnPz2agYL1SsW.png', type: 'milk', description: 'Helado blanco en copa de margarita, decorado con malvaviscos y dulces de colores.' },
        { name: 'Billie Holiday (Chocolate Caliente)', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-Gp8bBD1yvLH0bP8JSsykyUX7nf14DK.png', type: 'milk', description: 'Helado de chocolate en copa dorada, decorado con tacones rosas de azúcar y perlas rosas.' },
      ],
    },
    en: {
      title: "Frosted Ice Creams",
      subtitle: "Choose from our delicious milk-based or refreshing water-based ice creams",
      menuButton: "Menu",
      instagramButton: "Follow Us",
      languageToggle: "Español",
      footerText: "",
      address: "C. Querétaro 74 Roma Nte., Cuauhtémoc, 06700 Mexico City, CDMX",
      heroTitle: "We are a",
      heroHighlight: "frosted ice cream",
      heroTitleEnd: "vintage-style bar.",
      products: [
        { name: 'Maria Felix (Nutella)', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-ZEqnyUl0wZcxDRroDEtILLwM0ymUO3.png', type: 'milk', description: 'Coconut ice cream with de la Rosa marzipan, covered in shredded coconut and a sweet touch.' },
        { name: 'Frida Kahlo (Spicy Mango)', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-7jL9Nu9kZ1Dblohlz3SU9TffXAJ71y.png', type: 'water', description: 'Frozen mango drink with chamoy, garnished with lime and a spicy kick.' },
        { name: 'Édith Piaf (Strawberries and Cream)', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website%20-%20Menu%20Grid-tyq9XkG5MqkRhVeJ8SbUuqFC4uqsbq.png', type: 'milk', description: 'Pink ice cream in a margarita glass, topped with whipped cream, pink pearls, and a whole strawberry.' },
        { name: 'Flor Silvestre (Marzipan)', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-zkzwt35SgAvYURp7Q6lgUe5QuHyTld.png', type: 'milk', description: 'Pink and white ice cream in a pink cup, decorated with gold pearls and pink sprinkles.' },
        { name: 'Marilyn Monroe (Horchata)', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-fHdFgNPaloPOmKXMEGnPz2agYL1SsW.png', type: 'milk', description: 'White ice cream in a margarita glass, decorated with marshmallows and colorful candies.' },
        { name: 'Billie Holiday (Hot Chocolate)', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-Gp8bBD1yvLH0bP8JSsykyUX7nf14DK.png', type: 'milk', description: 'Chocolate ice cream in a gold cup, decorated with pink sugar high heels and pink pearls.' },
      ],
    },
  };

  return (
    <section className="bg-[#FFD1DC] min-h-screen font-serif md:pt-20">
      <header className="bg-white p-4 md:fixed md:top-0 md:left-0 md:right-0 md:z-50 md:shadow-md">
        <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <ul className="flex space-x-4 md:space-x-6 text-[#FF66C4] font-sans text-xs md:text-sm mb-2 md:mb-0">
            <li className="cursor-pointer hover:underline" onClick={() => scrollToSection(menuRef)}>Nuestros Helados</li>
            <li className="cursor-pointer hover:underline">
              <a href="https://maps.app.goo.gl/m5RBkRX9bNzT5KfQ7" target="_blank" rel="noopener noreferrer">Dirección</a>
            </li>
          </ul>
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rasvola%20(2)-FKRRkkQxKY8UfQIhDJg6UmlMFlOwqe.png" 
            alt="Rasvola Text Logo" 
            className="h-6 md:h-8 my-2 md:my-0"
          />
          <ul className="flex space-x-4 md:space-x-6 text-[#FF66C4] font-sans text-xs md:text-sm mt-2 md:mt-0">
            <li className="cursor-pointer hover:underline">
              <a href="https://www.instagram.com/rasvola/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="mailto:hola@rasvola.com">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <section className="flex flex-col items-center mb-12 md:mb-16 lg:mb-20">
          <article className="max-w-6xl w-full mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 lg:space-x-12">
              <figure className="md:w-2/5 mb-6 md:mb-0">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Disen%CC%83o%20sin%20ti%CC%81tulo%20(3)-lu6GqKAJHkRHjknaHSXunIx1KyXp7E.png" 
                  alt="Rasvola Logo" 
                  className="mx-auto w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64"
                />
              </figure>
              <div className="md:w-3/5">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#FF66C4] mb-4 sm:mb-6 lg:mb-8 text-center md:text-left leading-tight font-fraunces">
                  {content[language].heroTitle}{' '}
                  <span className="text-white whitespace-nowrap">{content[language].heroHighlight}</span>{' '}
                  <span className="whitespace-nowrap">{content[language].heroTitleEnd}</span>
                </h1>
                <div className="flex justify-center md:justify-start space-x-3 sm:space-x-4 lg:space-x-6">
                  <Button className="bg-[#FF66C4] text-white hover:bg-[#FF4DAD] text-sm sm:text-base md:text-lg lg:text-xl px-3 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4" onClick={() => scrollToSection(menuRef)}>
                    {content[language].menuButton}
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-[#FF66C4] text-[#FF66C4] hover:bg-[#FF66C4] hover:text-white text-sm sm:text-base md:text-lg lg:text-xl px-3 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4"
                    onClick={() => window.open('https://www.instagram.com/rasvola/', '_blank')}
                  >
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 mr-2" />
                    {content[language].instagramButton}
                  </Button>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16 lg:mb-20">
          <div className="aspect-[1855/1285] relative">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-bFSorKEfqUqOhBqnsDFVaMmaRubub6.png" alt="Stylized ice cream cart" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
          </div>
          <div className="aspect-[1855/1285] relative">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-kPpsyN8DqUNx38uHBW1sXrcvrzIRNK.png" alt="Polaroid of ice cream cart" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
          </div>
          <div className="aspect-[1855/1285] relative">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-0p6RGniOX57mRJmAxMkB7XDeGXvN1o.png" alt="Ice cream cart in market" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
          </div>
          <div className="aspect-[1855/1285] relative">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-n70wNox2EmJSsIZlIIJDB5V8UiGVyB.png" alt="Pink ice cream with strawberry and Mexican flag" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
          </div>
          <div className="aspect-[1855/1285] relative">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-lkhJwXxcQELQjaPT1pKiUdGtOn4tgN.png" alt="Coconut ice cream with de la Rosa mazapan" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
          </div>
          <div className="aspect-[1855/1285] relative">
            <img  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-bn8cdvZS6mgz4x1h1xKSDULHidLtvl.png" alt="Rasvola ice cream shop exterior" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
          </div>
        </section>

        <section ref={menuRef} className="bg-white py-8 sm:py-12 lg:py-16 px-4 lg:px-8 rounded-lg mb-12 md:mb-16 lg:mb-20">
          <div className="container mx-auto">
            <header className="text-center mb-8 lg:mb-12">
              <h2 className="text-[#ff66c4] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 relative inline-block font-fraunces">
                {content[language].title}
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#ffd700] transform skew-x-12"></span>
              </h2>
              <div className="mt-4 lg:mt-6">
                <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 lg:px-6 lg:py-3 shadow-inner">
                  <span className={`text-sm lg:text-base ${language === 'es' ? 'font-bold' : ''}`}>Español</span>
                  <Switch
                    checked={language === 'en'}
                    onCheckedChange={toggleLanguage}
                    className="data-[state=checked]:bg-[#ff66c4]"
                  />
                  <span className={`text-sm lg:text-base ${language === 'en' ? 'font-bold' : ''}`}>English</span>
                </div>
              </div>
            </header>
            <p className="text-center mb-8 md:mb-12 lg:mb-16 text-gray-600 italic text-sm md:text-base lg:text-lg">{content[language].subtitle}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
              {content[language].products.map((product, index) => (
                <article key={index} className="rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
                  <div className="relative group h-48 md:h-64 lg:h-72">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover object-center transition-all duration-300 group-hover:brightness-75"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
                    <h3 className="absolute bottom-4 left-4 text-white text-xl md:text-2xl lg:text-3xl font-bold drop-shadow-lg font-fraunces">{product.name}</h3>
                    {product.type === 'milk' ? (
                      <Milk className="absolute top-4 right-4 text-white h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 drop-shadow-lg" />
                    ) : (
                      <Droplet className="absolute top-4 right-4 text-white h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 drop-shadow-lg" />
                    )}
                  </div>
                  <div className="p-4 lg:p-6 bg-white">
                    <p className="text-gray-600 text-xs md:text-sm lg:text-base mb-4">
                      {product.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#FF66C4] text-white p-6 md:p-8 lg:p-10">
        <div className="container mx-auto text-center">
          <Button 
            variant="outline" 
            className="bg-white text-[#FF66C4] hover:bg-[#FF66C4] hover:text-white transition-all duration-300 mb-4 lg:mb-6 text-sm md:text-base lg:text-lg px-4 py-2 lg:px-6 lg:py-3"
            onClick={() => window.open('https://www.instagram.com/rasvola/', '_blank')}
          >
            <Instagram className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 mr-2" />
            Síguenos en Instagram
          </Button>
          <p className="mb-2 text-sm md:text-base lg:text-lg">&copy; 2024 RASVOLA. {content[language].footerText}</p>
          <p className="text-sm md:text-base lg:text-lg">
            <a href="https://maps.app.goo.gl/m5RBkRX9bNzT5KfQ7" target="_blank" rel="noopener noreferrer" className="hover:underline">
              {content[language].address}
            </a>
          </p>
        </div>
      </footer>
    </section>
  )
}