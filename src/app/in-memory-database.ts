import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Category } from './pages/categories/shared/category.model'
import { Entry } from './pages/entries/shared/entry.model'

export class InMemoryDatabase implements InMemoryDbService {
    createDb() {
        const categories: Category[] = [
            { id: 1, name: "Lazer", description: "Cinema, parques" },
            { id: 2, name: "Moradia", description: "Pagamentos de contas" },
            { id: 3, name: "Salário", description: "Recebimento do salário" },
            { id: 4, name: "Cinema", description: "Filmes lançamentos" },
            { id: 5, name: "Saúde", description: "Plano de saúde" },
            { id: 6, name: "Freelas", description: "Alguns freelas" }
        ];

        const entries: Entry[] = [
            { id: 1, name: "Gás de cozinha", categoryId: categories[0].id, category: categories[0], paid: true, date: "14/10/2018", amount: "70,80", type: "expense", description: "Qualquer descrição para essa despesa" } as Entry,
            { id: 2, name: "Suplementos", categoryId: categories[5].id, category: categories[5], paid: false, date: "14/10/2018", amount: "70,80", type: "expense", description: "Qualquer descrição para essa despesa" } as Entry,
            { id: 3, name: "Salário na empresa X", categoryId: categories[3].id, category: categories[3], paid: true, date: "14/10/2018", amount: "70,80", type: "revenue", description: "Qualquer descrição para essa despesa" } as Entry,
            { id: 4, name: "Aluguel de filme", categoryId: categories[1].id, category: categories[1], paid: true, date: "14/10/2018", amount: "70,80", type: "expense", description: "Qualquer descrição para essa despesa" } as Entry,
            { id: 5, name: "Uber", categoryId: categories[5].id, category: categories[5], paid: true, date: "14/10/2018", amount: "70,80", type: "expense", description: "Qualquer descrição para essa despesa" } as Entry,
            { id: 6, name: "Cinema", categoryId: categories[2].id, category: categories[2], paid: true, date: "14/10/2018", amount: "70,80", type: "expense", description: "Qualquer descrição para essa despesa" } as Entry
        ];

        return { categories, entries };
    }
}