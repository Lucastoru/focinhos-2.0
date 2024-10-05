const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seedDatabase() {
  try {
    const images = [
      "https://utfs.io/f/mAGlPohZDfAbDYicZbeRCF0YcxgiXEhnLSzOB2TvI9belRVJ",
      "https://utfs.io/f/mAGlPohZDfAbkXQrfml4fIBlDjuLPwOHrMqJAE0nYWxsVc3p",
      "https://utfs.io/f/mAGlPohZDfAbq8Nsh0OeN1DUYHjvVGSQ2ogJyW3RP6tadrBx",
      
    ];
    // Nomes criativos para as barbearias
    const creativeNames = [
      "Focinhos 1",
      "Focinhos 2",
      "Focinhos 3",
    ];

    // Endereços aletórios para barbearias
    const addresses = [
      "Rua Augusta, 1234",
      "Avenida Brigadeiro Faria Lima, 2233",
      "Rua Oscar Freire, 789",
  ];

  const services = [
    {
      name: "Banho e Tosa",
      description: "Serviços de banho e tosa para o seu pet.",
      price: 60.0,
      imageUrl: "https://utfs.io/f/e6f0628f-f398-481a-87ee-d9eca5cd4822-l81wcc.jpeg",
    },
    {
      name: "Vacinação",
      description: "Mantenha a saúde do seu pet em dia.",
      price: 40.0,
      imageUrl: "https://utfs.io/f/5c2cc333-ed1a-47b0-8612-4a0fc64d30e7-l81vqt.jpeg",
    },
    {
      name: "consultas",
      description: "Tenha mais um membro da família em seu lar.",
      price: 35.0,
      imageUrl: "https://utfs.io/f/64b828e6-25eb-441e-ab9e-fe4e37f336ac-l81vro.jpeg",
    },
    {
      name: "Passeio e Diversão",
      description: "Contrate um colaborador para passeio de pet.",
      price: 20.0,
      imageUrl: "https://utfs.io/f/091bf7aa-c9b5-414f-8348-caf99d10b8bf-l81wam.jpeg",
    },
    {
      name: "Spa & Massagem",
      description: "Seu pet com uma massagem revigorante.",
      price: 50.0,
      imageUrl: "https://utfs.io/f/b7c8a62a-bf7e-4ee4-ba8b-559a1d770e2e-l81wbh.jpeg",
    },
    {
      name: "Hidratação",
      description: "Hidratação para um pelo mais macio.",
      price: 25.0,
      imageUrl: "https://utfs.io/f/8a3b44f5-00b6-4669-9cca-addb7e9b0c11-l81vpy.jpeg",
    },
  ];
    // Criar 10 barbershops com nomes e endereços fictícios
    const barbershops = [];
    for (let i = 0; i < 3; i++) {
      const name = creativeNames[i];
      const address = addresses[i];
      const imageUrl = images[i];

      const barbershop = await prisma.barbershop.create({
        data: {
          name,
          address,
          imageUrl: imageUrl,
          phones: ["(11) 99999-9999", "(11) 99999-9999"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac augue ullamcorper, pharetra orci mollis, auctor tellus. Phasellus pharetra erat ac libero efficitur tempus. Donec pretium convallis iaculis. Etiam eu felis sollicitudin, cursus mi vitae, iaculis magna. Nam non erat neque. In hac habitasse platea dictumst. Pellentesque molestie accumsan tellus id laoreet.",
        },
      });

      for (const service of services) {
        await prisma.barbershopService.create({
          data: {
            name: service.name,
            description: service.description,
            price: service.price,
            barbershop: {
              connect: {
                id: barbershop.id,
              },
            },
            imageUrl: service.imageUrl,
          },
        });
      }

      barbershops.push(barbershop);
    }

    // Fechar a conexão com o banco de dados
    await prisma.$disconnect();
  } catch (error) {
    console.error("Erro ao criar as barbearias:", error);
  }
}

seedDatabase();
