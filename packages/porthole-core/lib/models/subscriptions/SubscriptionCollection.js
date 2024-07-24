import { ItemCollection } from '../common/ItemCollection';
import { Subscription } from './Subscription';

export class SubscriptionCollection extends ItemCollection {

  get items() {
    if (!this.data?.edges) return [];

    return this.data.edges.map((edge) => new Subscription(edge, this.shop));
  }

}
