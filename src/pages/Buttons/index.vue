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
                    <fy-button color="success">
                      <v-icon class="mr-2">mdi-check-bold</v-icon>
                      Success
                    </fy-button>
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
                    <fy-button color="info">
                      <v-icon class="mr-2">mdi-information-outline</v-icon>
                      Info
                    </fy-button>
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
                    <fy-button color="warning">
                      <v-icon class="mr-2">mdi-alert-outline</v-icon>
                      Warning
                    </fy-button>
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
                    <fy-button color="error">
                      <v-icon class="mr-2">mdi-trash-can-outline</v-icon>
                      Delete
                    </fy-button>
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

import FyButton from '@/components/FyButton';

const contentUsageDefault = `
    <fy-button>
      Default
    </fy-button>
`;
const contentUsageSuccess = `
    <fy-button color="success">
      <v-icon class="mr-2">mdi-check-bold</v-icon>
      Success
    </fy-button>
`;
const contentUsageInfo = `
    <fy-button color="info">
      <v-icon class="mr-2">mdi-information-outline</v-icon>
      Info
    </fy-button>
`;
const contentUsageWarning = `
    <fy-button color="warning">
      <v-icon class="mr-2">mdi-alert-outline</v-icon>
      Info
    </fy-button>
`;
const contentUsageDelete = `
    <fy-button color="error">
      <v-icon class="mr-2">mdi-trash-can-outline</v-icon>
      Info
    </fy-button>
`;

export default Vue.extend({
  name: 'PageButtons',
  components: { FyButton },
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
