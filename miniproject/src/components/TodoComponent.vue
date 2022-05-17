<template>
  <div class="todo-list-item">
    <div class="list">
      <div class="container">
      <div v-if="editMode" class="todo-edit">
        <div class="index-column">{{ index + 1 }}.</div>

        <ApolloMutation
          :mutation="
            (gql) =>
              gql`
                mutation MyMutation($id: Int!, $review: String!) {
                  update_review_makanan_by_pk(
                    pk_columns: { id: $id }
                    _set: { review: $review }
                  ) {
                    id
                    review
                  }
                }
              `
          "
          :variables="{ id: todoItem.id, review: editedTodo }"
          :refetchQueries="refetchQueriesAfterMyMutation"
        >
          <template v-slot="{ mutate, error }">
            <input
              v-model="editedTodo"
              @keyup.enter="mutate()"
              type="text"
              class="edit-column"
            />

            <!-- <button :disabled="loading" @click="mutate()">Click me</button> -->
            <p v-if="error">An error occurred: {{ error }}</p>
          </template>
        </ApolloMutation>
      </div>
      <div v-else class="todo">{{ index + 1 }}. {{ todoItem.review }}</div>

      <ApolloMutation
        :mutation="
          (gql) => gql`
            mutation DeleteTodo($id: Int!) {
              delete_review_makanan_by_pk(id: $id) {
                id
                review
              }
            }
          `
        "
        :variables="{ id: todoItem.id }"
        :update="refetchQueriesAfterMyMutation"
      >
        <template v-slot="{ mutate, error }">
          <button @click="mutate()" class="action">Delete</button>

          <!-- <button :disabled="loading" @click="mutate()">Click me</button> -->
          <p v-if="error">An error occurred: {{ error }}</p>
        </template>
      </ApolloMutation>
      <button @click="editHandler" class="action">Edit</button>
    </div>
  </div>
  </div>
</template>

<script>
import gql from "graphql-tag"

export default {
  name: "TodoComponent",
  props: {
    index: Number,
    todoItem: Object,
  },
  data() {
    return {
      editedTodo: "",
      editMode: false,
      isEmpty: false,
    };
  },
  mounted() {
    this.editedTodo = this.todoItem.body;
  },
  computed: {
    refetchQueriesAfterMyMutation() {
       return [
        {
          query: gql`
            query MyQuery {
              review_makanan {
                id
                review
              }
            }
          `,
        },
      ];
    },
  },
  methods: {
    changeEditMode() {
      this.editMode = !this.editMode;
    },
    editHandler() {
      this.editMode ? this.editTodo() : this.changeEditMode();
    },
    editTodo() {
      this.isEmpty = !this.editedTodo;
      if (!this.isEmpty) {
        this.$emit("edit-todo", this.todoItem.id, this.editedTodo);
        this.changeEditMode();
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
}
.container {
    display: flex;
}
.todo {
  margin-right: auto;
}

a {
  color: #000000;
  text-decoration: none;
}
.inputBar {
  width: 80%;
  margin-left: 10px;
}

</style>