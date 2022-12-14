import { Model, Document } from 'mongoose';
import { PaginateModel } from 'mongoose-paginate';
import { IRouterContext } from 'koa-router';

export abstract class Controller {
  private __model: PaginateModel<Document>;

  constructor(__model: PaginateModel<Document>) {
    this.__model = __model;
    for(let method of ['index', 'show', 'create', 'update', 'destroy']) {
      this[method] = this[method].bind(this);
    }
  }

  get model(): PaginateModel<Document> {
    return this.__model;
  }

  // Gets a list of Models
  public abstract  index(ctx: IRouterContext);

  // Gets a single Model from the DB
  public abstract  show(ctx: IRouterContext);

  // Creates a new Model in the DB
  public abstract  create(ctx: IRouterContext);

  // Updates an existing Model in the DB
  public abstract  update(ctx: IRouterContext);

  // Deletes a Model from the DB
  public abstract  destroy(ctx: IRouterContext);
}