<template>
  <f7-page>
    <f7-row no-gap>
      <f7-col width="0" tablet-width="70">
        <f7-navbar title="Test1"></f7-navbar>

        <f7-block-title>Usual Buttons</f7-block-title>
        <f7-block>
          <f7-row>
            <f7-col>
              <f7-button fill class="test">Button</f7-button>
            </f7-col>
            <f7-col>
              <f7-button fill>Button</f7-button>
            </f7-col>
            <f7-col>
              <f7-button fill>Round</f7-button>
            </f7-col>
          </f7-row>
        </f7-block>
      </f7-col>
      <f7-col width="0" tablet-width="30">
        <f7-navbar title="Order details"></f7-navbar>

        <f7-list inset>
          <f7-list-item title="#1 Chicken Sandwich" after="$11.90">
            <f7-badge slot="media" color="gray">2</f7-badge>
          </f7-list-item>
          <f7-list-item title="Milkshake" after="$5.50">
            <f7-badge slot="media" color="gray">2</f7-badge>
            <ul slot="root-end">
              <f7-list-item
                title="Chocolate"
                after="$0.00"
                class="padding-left-half padding-right"
              ></f7-list-item>
              <f7-list-item
                title="Minus Whipcream"
                after="$0.00"
                class="padding-left-half padding-right"
              ></f7-list-item>
              <f7-list-item
                title="Minus Cherry"
                after="$0.00"
                class="padding-left-half padding-right"
              ></f7-list-item>
            </ul>
          </f7-list-item>
          <f7-list-item title="#1 Chicken Sandwich" after="$11.90">
            <f7-badge slot="media" color="gray">2</f7-badge>
          </f7-list-item>
          <f7-list-item title="Milkshake" after="$5.50">
            <f7-badge slot="media" color="gray">2</f7-badge>
            <ul slot="root-end">
              <f7-list-item
                title="Chocolate"
                after="$0.00"
                class="padding-left-half padding-right"
              ></f7-list-item>
              <f7-list-item
                title="Minus Whipcream"
                after="$0.00"
                class="padding-left-half padding-right"
              ></f7-list-item>
              <f7-list-item
                title="Minus Cherry"
                after="$0.00"
                class="padding-left-half padding-right"
              ></f7-list-item>
            </ul>
          </f7-list-item>
          <f7-list-item title="#1 Chicken Sandwich" after="$11.90">
            <f7-badge slot="media" color="gray">2</f7-badge>
          </f7-list-item>
          <f7-list-item title="Milkshake" after="$5.50">
            <f7-badge slot="media" color="gray">2</f7-badge>
            <ul slot="root-end">
              <f7-list-item
                title="Chocolate"
                after="$0.00"
                class="padding-left-half padding-right"
              ></f7-list-item>
              <f7-list-item
                title="Minus Whipcream"
                after="$0.00"
                class="padding-left-half padding-right"
              ></f7-list-item>
              <f7-list-item
                title="Minus Cherry"
                after="$0.00"
                class="padding-left-half padding-right"
              ></f7-list-item>
            </ul>
          </f7-list-item>
        </f7-list>

        <f7-card>
          <f7-card-header>
            <div class="center" style="font-size: large">
              Total: $<span class="concessionsApp-pay-total">0.00</span>
            </div>

            <div class="right">
              <button
                class="button button-fill color-green concessionsApp-pay-button"
              >
                Pay
              </button>
            </div>
          </f7-card-header>
          <f7-card-footer>
            <f7-row style="width: 100%;">
              <f7-col>
                <f7-button fill>Button</f7-button>
              </f7-col>
              <f7-col>
                <f7-button fill color="red">Button</f7-button>
              </f7-col>
              <f7-col>
                <f7-button fill>Button</f7-button>
              </f7-col>
            </f7-row>
          </f7-card-footer>
        </f7-card>
      </f7-col>
    </f7-row>
  </f7-page>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "RegisterPage"
});
</script>

<style>
.test:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}

.test > * {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
