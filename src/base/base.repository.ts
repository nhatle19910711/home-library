interface baseEntity {
  id: string;
}

export class BaseRepository<T extends baseEntity> {
  protected model: T[] = [];

  create(data: T): T {
    this.model.push(data);
    return data;
  }

  findById(id: string): T {
    return this.model.find((entity) => entity.id === id);
  }

  find(query: Partial<T>): T[] {
    return this.model.filter((entity) => {
      for (const key in query) {
        if (!entity[key] === query[key]) {
          false;
        }
      }
      return true;
    });
  }

  update(id: string, data: Record<string, any>): T {
    const index = this.model.findIndex((entity) => entity.id === id);
    this.model[index] = { ...this.model[index], ...data };
    return this.model[index];
  }

  findAll(): T[] {
    return this.model;
  }

  deleteById(id: string): void {
    const index = this.model.findIndex((entity) => entity.id === id);

    this.model.splice(index, 1);
  }
}
