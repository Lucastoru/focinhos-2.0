import PetshopItem from "../_components/petshop-item"
import Header from "../_components/header"
import Search from "../_components/search"
import { db } from "../_lib/prisma"

interface PetshopsPageProps {
  searchParams: {
    title?: string
    service?: string
  }
}

const PetshopsPage = async ({ searchParams }: PetshopsPageProps) => {
  const petshops = await db.petshop.findMany({
    where: {
      OR: [
        searchParams?.title
          ? {
              name: {
                contains: searchParams?.title,
                mode: "insensitive",
              },
            }
          : {},
        searchParams.service
          ? {
              services: {
                some: {
                  name: {
                    contains: searchParams.service,
                    mode: "insensitive",
                  },
                },
              },
            }
          : {},
      ],
    },
  })

  return (
    <div>
      <Header />
      <div className="my-6 px-5">
        <Search />
      </div>
      <div className="px-5">
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Resultados para &quot;{searchParams?.title || searchParams?.service}
          &quot;
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {petshops.map((petshop) => (
            <PetshopItem key={petshop.id} petshop={petshop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PetshopsPage
