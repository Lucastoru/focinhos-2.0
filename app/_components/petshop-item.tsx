import { Petshop } from "@prisma/client"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { StarIcon } from "lucide-react"
import Link from "next/link"

interface PetshopItemProps {
  petshop: Petshop
}

const PetshopItem = ({ petshop }: PetshopItemProps) => {
  return (
    <Card className="min-w-[167px] rounded-2xl">
      <CardContent className="p-0 px-1 pt-1">
        {/* IMAGEM */}
        <div className="relative h-[159px] w-full">
          <Image
            alt={petshop.name}
            fill
            className="rounded-2xl object-cover"
            src={petshop.imageUrl}
          />

          <Badge
            className="absolute left-2 top-2 space-x-1"
            variant="secondary"
          >
            <StarIcon size={12} className="fill-primary text-primary" />
            <p className="text-xs font-semibold">4,7</p>
          </Badge>
        </div>

        {/* TEXTO */}
        <div className="px-1 py-3">
          <h3 className="truncate font-semibold">{petshop.name}</h3>
          <p className="truncate text-sm text-gray-400">{petshop.address}</p>
          <Button variant="secondary" className="mt-3 w-full" asChild>
            <Link href={`/petshops/${petshop.id}`}>Reservar</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default PetshopItem
