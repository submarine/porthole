import { CampaignOrder } from './CampaignOrder';
import { ItemCollection } from '../common/ItemCollection';

export class CampaignOrderCollection extends ItemCollection {
  get items() {
    if (!this.data?.edges) return [];

    return this.data.edges.map((edge) => new CampaignOrder(edge));
  }
}
