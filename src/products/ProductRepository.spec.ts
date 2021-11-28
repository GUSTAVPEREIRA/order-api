import { Decimal } from '@prisma/client/runtime';
import * as faker from 'faker';
import { PrismaService } from '../prisma/PrismaService';
import { ProductRepository } from './ProductRepository';

const prismaService = new PrismaService();
const prismaRepository = new ProductRepository(prismaService);


describe('Create Product', () => {

    it("Should created product", async () => {
        const name = faker.name.findName();
        const price: Decimal = faker.commerce.price(1, 99999, 2)

        const product = await prismaRepository.create({
            name: name,
            price: price
        })

        expect(product.name).toBe(name);
        expect(product.price + ".00").toBe(price);
    })
})