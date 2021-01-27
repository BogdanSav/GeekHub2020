export default function mapToStateProps(state) {
    return {
        value: state.todos.items,
        state: state.todos,
    };
};