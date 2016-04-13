<script id="wow-item-template" type="text/x-handlebars-template">
    <aside class="wow-item hidden" data-quality="{{ quality }}">
        <header class="wow-item__header">
            <p class="header__title">{{ name }}</p>
            {{#if ItemLevel}}
            <p class="info__item-level">Item Level {{ ItemLevel }}</p>
            {{/if}}
            {{#if binds}}<p class="header__binds">{{ binds }}</p>{{/if}}
      {{#if unique}}
        <p class="header__unique">Unique</p>
      {{/if}}
    </header>
    <section class="wow-item__type">
      <p class="type__slot">{{slot}}</p>
      <p class="type__item">{{type}}</p>
    </section>
    <section class="wow-item__stats">
      {{#if damage}}
      <p class="stats__damage-armor"><span class="value">{{ damage.min }} - {{damage.max}}</span> Damage</p>
      <p class="stats__speed">Speed <span class="value">{{ speed damage.speed }}</span></p>
      <p class="stats__dps">(<span class="value">{{ dps damage }}</span> damage per second)</p>
      {{/if}}
      
      {{#if armor}}
      <p class="stats__armor">{{ armor }} Armor</p>
      {{/if}}
      
      <div class="stats__list">
        {{#each stats}}
        <p class="stats__{{ type }} stats__list-item">+{{ value }} {{ stat }}</p>
        {{/each}}
      </div>
      
    </section>
    
    {{#if enchantments}}
    <section class="wow-item__enchantments">
      
      {{#each enchantments.enchants}}
      <p class="enchantments__enchant">{{ description }}</p>
      {{/each}}
      
      <div class="enchantments__sockets">
        
        {{#each enchantments.sockets }}
        <p class="enchantments__socket socket--{{ color }}">{{ color }} socket</p>
        {{/each}}

        {{#if enchantments.socketBonus}}
        <p class="enchantments__socket-bonus">Socket Bonus: {{ enchantments.socketBonus }}</p>
        {{/if}}
        
      </div>
      
    </section>
    {{/if}}
    
    <section class="wow-item__info">
      
      {{#if MaxDurability}}
      <p class="info__durability">Durability: {{ MaxDurability }} / {{ MaxDurability }}</p>
      {{/if}}
      
      {{#each chanceOnHit}}
      <p class="info__chance-on-hit">Chance on hit: {{ description }}</p>
      {{/each}}
      
      {{#if classes}}
      <p class="info__class-requirement">Classes: <span class="value">{{ classes classes }}</span></p>
      {{/if}}
      
      {{#if RequiredLevel}}
      <p class="info__level-requirement">Requires Level {{ RequiredLevel }}</p>
      {{/if}}
    </section>
    
    {{#if bonuses}}
    <section class="wow-item__bonuses">
      {{#each bonuses}}
      <p class="bonuses__bonus">{{ description }}</p>
      {{/each}}
    </section>
    {{/if}}
    
    <section class="wow-item__info">

      {{#if tradelevel }}
      <p class="info__trade-level">Requires {{ tradelevel.trade }} ({{ tradelevel.level }})</p>
      {{/if}}

      {{#if description }}
      <p class="info__flavour-text">"{{ description }}"</p>
      {{/if}}
    </section>
    <section class="wow-item__price">
      {{#if price_gold }}
      <p class="price__gold">Sell Price: {{ price_gold }}</p>
      {{/if}}
      {{#if price_silver }}
      <p class="price__silver">{{ price_silver }}</p>
      {{/if}}
      {{#if price_copper }}
      <p class="price__copper">{{ price_copper }}</p>
      {{/if}}
    </section>
  </aside>
</script>