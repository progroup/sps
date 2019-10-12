<template>
  <aside class="column is-2">
    <div>
      <ais-refinement-list attribute-name="category" :sort-by="['name:asc']">
        <template slot="header">
          <p class="menu-label">Category</p>
        </template>

        <template scope="props">
          <span class="ais-refinement-list__value" v-text="seriesName(props.value)"></span>
        </template>
      </ais-refinement-list>
    </div>

    <div>
      <ais-refinement-list attribute-name="_tags">
        <template slot="header">
          <p class="menu-label">Tags</p>
        </template>

        <template scope="props">
          <span class="ais-refinement-list__value" v-text="seriesName(props.value)"></span>
        </template>
      </ais-refinement-list>
    </div>

    <div>
      <ais-refinement-list attribute-name="filetype" :sort-by="['count:desc']">
        <template slot="header">
          <p class="menu-label">File Type</p>
        </template>

        <template scope="props">
          <span class="ais-refinement-list__value" v-text="seriesName(props.value)"></span>
        </template>
      </ais-refinement-list>
    </div>
  </aside>
</template>
