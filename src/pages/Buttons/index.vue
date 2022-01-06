<template>
  <v-container class="py-8 px-10" fluid>
    <v-row>
      <v-col cols="12">
        <h2>Buttos</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Default</v-card-title>

          <v-list two-line>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Example</v-list-item-title>
                <v-list-item-subtitle class="py-8 px-8">
                  <v-row>
                    <fy-button> Default </fy-button>
                  </v-row>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-list two-line>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Usage</v-list-item-title>
                <v-list-item-subtitle class="pb-4 pt-2">
                  <v-row>
                    <pre>
                      {{ contentUsageDefault }}
                    </pre>
                  </v-row>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Success</v-card-title>

          <v-list two-line>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Example</v-list-item-title>
                <v-list-item-subtitle class="py-8 px-8">
                  <v-row>
                    <fy-button-success>
                      <v-icon class="mr-2">mdi-check-bold</v-icon>
                      Success
                    </fy-button-success>
                  </v-row>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-list two-line>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Usage</v-list-item-title>
                <v-list-item-subtitle class="pb-4 pt-2">
                  <v-row>
                    <pre>
                      {{ contentUsageSuccess }}
                    </pre>
                  </v-row>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Info</v-card-title>

          <v-list two-line>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Example</v-list-item-title>
                <v-list-item-subtitle class="py-8 px-8">
                  <v-row>
                    <fy-button-info>
                      <v-icon class="mr-2">mdi-information-outline</v-icon>
                      Info
                    </fy-button-info>
                  </v-row>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-list two-line>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Usage</v-list-item-title>
                <v-list-item-subtitle class="pb-4 pt-2">
                  <v-row>
                    <pre>
                      {{ contentUsageInfo }}
                    </pre>
                  </v-row>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Warning</v-card-title>

          <v-list two-line>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Example</v-list-item-title>
                <v-list-item-subtitle class="py-8 px-8">
                  <v-row>
                    <fy-button-warning>
                      <v-icon class="mr-2">mdi-alert-outline</v-icon>
                      Warning
                    </fy-button-warning>
                  </v-row>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-list two-line>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Usage</v-list-item-title>
                <v-list-item-subtitle class="pb-4 pt-2">
                  <v-row>
                    <pre>
                      {{ contentUsageWarning }}
                    </pre>
                  </v-row>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Delete</v-card-title>

          <v-list two-line>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Example</v-list-item-title>
                <v-list-item-subtitle class="py-8 px-8">
                  <v-row>
                    <fy-button-delete>
                      <v-icon class="mr-2">mdi-trash-can-outline</v-icon>
                      Delete
                    </fy-button-delete>
                  </v-row>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-list two-line>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Usage</v-list-item-title>
                <v-list-item-subtitle class="pb-4 pt-2">
                  <v-row>
                    <pre>
                      {{ contentUsageDelete }}
                    </pre>
                  </v-row>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Props</v-card-title>

          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  >Access the list of properties on the link
                  <a target="_blank" href="https://vuetifyjs.com/en/api/v-btn/"
                    >v-btn API (Vuetify)</a
                  ></v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from 'vue';

import {
  FyButton,
  FyButtonInfo,
  FyButtonSuccess,
  FyButtonWarning,
  FyButtonDelete,
} from '@/components/Buttons';

const contentUsageDefault = `
    <fy-button>
      Default
    </fy-button>
`;
const contentUsageSuccess = `
    <fy-button-success>
      <v-icon class="mr-2">mdi-check-bold</v-icon>
      Success
    </fy-button-success>
`;
const contentUsageInfo = `
    <fy-button-info>
      <v-icon class="mr-2">mdi-information-outline</v-icon>
      Info
    </fy-button-info>
`;
const contentUsageWarning = `
    <fy-button-info>
      <v-icon class="mr-2">mdi-alert-outline</v-icon>
      Info
    </fy-button-info>
`;
const contentUsageDelete = `
    <fy-button-info>
      <v-icon class="mr-2">mdi-trash-can-outline</v-icon>
      Info
    </fy-button-info>
`;

export default Vue.extend({
  name: 'PageButtons',
  components: { FyButton, FyButtonInfo, FyButtonSuccess, FyButtonWarning, FyButtonDelete },
  data() {
    return {
      contentUsageDefault,
      contentUsageSuccess,
      contentUsageInfo,
      contentUsageWarning,
      contentUsageDelete,
    };
  },
});
</script>

<style></style>
