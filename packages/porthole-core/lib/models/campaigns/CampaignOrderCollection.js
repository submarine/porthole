import CampaignOrder from './CampaignOrder';
import ItemCollection from './ItemCollection';

class CampaignOrderCollection extends ItemCollection {
  get items() {
    if (!this.data?.edges) return [];

    return this.data.edges.map((edge) => new CampaignOrder(edge));
  }
}

export default CampaignOrderCollection;
