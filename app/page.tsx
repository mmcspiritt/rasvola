'use client'

import React, { useState, useRef } from 'react'
import { Instagram, Droplet, Milk } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import Head from 'next/head';

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
      title: "Helados Escarchados en Roma Norte",
      subtitle: "Elige entre nuestros deliciosos helados y nieves escarchados a base de leche o refrescantes a base de agua",
      menuButton: "Menú",
      instagramButton: "Síguenos",
      languageToggle: "English",
      footerText: "",
      address: "Calle Querétaro 74 Roma Norte, Cuauhtémoc, 06700 Ciudad de México, CDMX",
      heroTitle: "Somos una barra de",
      heroHighlight: "helados escarchados",
      heroTitleEnd: "estilo vintage",
      products: [
        { name: 'Maria Felix (Nutella)', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-ZEqnyUl0wZcxDRroDEtILLwM0ymUO3.png', type: 'milk', description: 'Base de Nutella® con helado de vainilla, jarabe de Nutella®, palitos de Pocky chocolate con toppings de perlas, bombones, y botas vaqueras de chocolate.' },
        { name: 'Frida Kahlo (Mango Enchilado)', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-7jL9Nu9kZ1Dblohlz3SU9TffXAJ71y.png', type: 'water', description: 'Base de Mango con chamoy, miguelito, tajin, limon, con toppings de gomitas de mango enchilado y una paleta de mango enchilado.' },
        { name: 'Édith Piaf (Fresas con Crema)', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website%20-%20Menu%20Grid-tyq9XkG5MqkRhVeJ8SbUuqFC4uqsbq.png', type: 'milk', description: 'Base de Fresas con Crema y helado de vainilla, con toppings de perlas, fresas naturales, y crema batida.' },
        { name: 'Flor Silvestre (Mazapán)', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-zkzwt35SgAvYURp7Q6lgUe5QuHyTld.png', type: 'milk', description: 'Base de Mazapán con helado de vainilla, con toppings de un palito de Pocky chocolate, Mazapán entero, lechera roja, y boronas de Mazapán.' },
        { name: 'Marilyn Monroe (Horchata)', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-fHdFgNPaloPOmKXMEGnPz2agYL1SsW.png', type: 'milk', description: 'Base de Horchata con helado de vainilla, bombones, con toppings de perlas, estrellas, lechera, y coco rallado.' },
        { name: 'Billie Holiday (Chocolate Caliente)', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-Gp8bBD1yvLH0bP8JSsykyUX7nf14DK.png', type: 'milk', description: 'Una taza de chocolate caliente artesanal, con un malvavisco casero de sabor crema islandesa, helado escarchado sabor horchata, crema batida, perlas doradas y estrellas rosas.' },
      ],
    },
    en: {
      title: "Shaved Ice Cream in Roma Norte",
      subtitle: "Choose from our delicious milk-based or refreshing water-based ice creams",
      menuButton: "Menu",
      instagramButton: "Follow Us",
      languageToggle: "Español",
      footerText: "",
      address: "Calle Querétaro 74 Roma Norte, Cuauhtémoc, 06700 Mexico City, CDMX",
      heroTitle: "We are a",
      heroHighlight: "vintage-styled",
      heroTitleEnd: "shaved ice cream bar.",
      products: [
        { name: 'Maria Felix (Nutella)', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-ZEqnyUl0wZcxDRroDEtILLwM0ymUO3.png', type: 'milk', description: 'Nutella® base with vanilla ice cream, Nutella® drizzle, topped with sugar pearls, marshmallows, and chocolate cowboy boots.' },
        { name: 'Frida Kahlo (Spicy Mango)', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-7jL9Nu9kZ1Dblohlz3SU9TffXAJ71y.png', type: 'water', description: 'Mango base with the perfect mix of sour, sweet, and spicy. Topped with mango gummies and a mango lollipop.' },
        { name: 'Édith Piaf (Strawberries and Cream)', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website%20-%20Menu%20Grid-tyq9XkG5MqkRhVeJ8SbUuqFC4uqsbq.png', type: 'milk', description: 'Strawberries and cream base with vanilla ice cream, topped with sugar pearls, strawberry, and whipped cream.' },
        { name: 'Flor Silvestre (Marzipan)', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-zkzwt35SgAvYURp7Q6lgUe5QuHyTld.png', type: 'milk', description: 'Peanut butter base with vanilla ice cream, a chocolate Pocky stick, Mazapán (peanut butter candy), topped with red condensed milk and peanut butter crumbs.' },
        { name: 'Marilyn Monroe (Horchata)', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-fHdFgNPaloPOmKXMEGnPz2agYL1SsW.png', type: 'milk', description: 'Horchata base (vanilla, cinnamon, rice, milk) with vanilla ice cream, topped with marshmallows, sugar pearls and stars, condensed milk, and shaved coconut.' },
        { name: 'Billie Holiday (Hot Chocolate)', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-Gp8bBD1yvLH0bP8JSsykyUX7nf14DK.png', type: 'milk', description: 'A cup of artisanal hot chocolate, topped with a homemade irish cream-flavored marshmallow, Horchata-flavored shaved ice cream, whipped cream, golden pearls, and pink star sprinkles.' },
      ],
    },
  };

  return (
    <>
      <Head>
        <meta name="description" content="Rasvola ofrece deliciosos helados y nieves escarchados estilo vintage en Roma Norte, CDMX. Prueba nuestros sabores únicos como Nutella, mango enchilado, y horchata." />
      </Head>
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
              alt="Rasvola - Helados Escarchados en Roma Norte, CDMX" 
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
                    alt="Helados escarchados estilo vintage en Roma Norte, Ciudad de México" 
                    className="mx-auto w-28 sm:w-36 md:w-48 lg:w-56 xl:w-64" // Slightly reduced size on mobile
                  />
                </figure>
                <div className="md:w-3/5">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#FF66C4] mb-4 sm:mb-6 lg:mb-8 text-center md:text-left leading-tight font-fraunces">
                    {content[language].heroTitle}{' '}
                    <span className="text-white whitespace-nowrap">{content[language].heroHighlight}</span>{' '}
                    <span className="whitespace-nowrap">{content[language].heroTitleEnd}</span>
                  </h1>
                  <div className="flex justify-center md:justify-start space-x-4 lg:space-x-6">
                    <Button className="bg-[#FF66C4] text-white hover:bg-[#FF4DAD] text-base md:text-lg lg:text-xl px-6 py-3 lg:px-8 lg:py-4" onClick={() => scrollToSection(menuRef)}>
                      {content[language].menuButton}
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-[#FF66C4] text-[#FF66C4] hover:bg-[#FF66C4] hover:text-white text-base md:text-lg lg:text-xl px-6 py-3 lg:px-8 lg:py-4"
                      onClick={() => window.open('https://www.instagram.com/rasvola/', '_blank')}
                    >
                      <Instagram className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 mr-2" />
                      {content[language].instagramButton}
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          </section>

          <section className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16 lg:mb-20">
            <div className="aspect-[1855/1285] relative">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-bFSorKEfqUqOhBqnsDFVaMmaRubub6.png" alt="Carrito de helados y nieves escarchadas Rasvola en Roma Norte" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
            </div>
            <div className="aspect-[1855/1285] relative">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-kPpsyN8DqUNx38uHBW1sXrcvrzIRNK.png" alt="Photo of ice cream cart from Rasvola's early days in Roma Norte Mexico City" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
            </div>
            <div className="aspect-[1855/1285] relative">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-0p6RGniOX57mRJmAxMkB7XDeGXvN1o.png" alt="Carrito de helados Rasvola en el mercado de Roma Norte" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
            </div>
            <div className="aspect-[1855/1285] relative">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-n70wNox2EmJSsIZlIIJDB5V8UiGVyB.png" alt="Nieve de Rasvola de fresas con crema en Ciudad de México" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
            </div>
            <div className="aspect-[1855/1285] relative">
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-lkhJwXxcQELQjaPT1pKiUdGtOn4tgN.png" alt="Helado Escarchado de Rasvola en Roma Norte, Ciudad de México" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
            </div>
            <div className="aspect-[1855/1285] relative">
              <img src="/images/Store-Front-Rasvola-Location-Roma-Norte.png" alt="Storefront photo of Rasvola's ice cream shop in Roma Norte, Mexico City" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
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
                        alt={`${product.name} - Helado escarchado de Rasvola en Roma Norte, CDMX`} 
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

        <footer className="bg-[#FFD1DC] text-[#FF66C4] p-6 md:p-8 lg:p-10">
          <div className="container mx-auto text-center">
            <Button 
              variant="outline" 
              className="bg-[#FF66C4] text-white hover:bg-white hover:text-[#FF66C4] transition-all duration-300 mb-4 lg:mb-6 text-sm md:text-base lg:text-lg px-4 py-2 lg:px-6 lg:py-3"
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
    </>
  )
}