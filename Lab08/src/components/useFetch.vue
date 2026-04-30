<template>
    <div class="container">
        <h1>Use Fetch</h1>
        <div class="table-responsive">
            <table class="table table-striped table-hover">
                <caption>Units</caption>
                <thead>
                    <tr>
                        <th>Code</th>
                    <th>Description</th>
                    <th>CP</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="unit in units" :key="unit.id">
                    <td>{{ unit.code }}</td>
                    <td>{{ unit.desc }}</td>
                    <td>{{ unit.cp }}</td>
                    <td>{{ unit.type }}</td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'useFetch',
        data() {
            return {
                units: []
            }
        }, 
        mounted() {
            fetch('./units.json')
                .then(response => {
                   //turning the response into usable data
                    return response.json();
                })
                .then(data => {
                    //this is the data you wanted to get from the url 
                    this.units = data;
                })
                .catch(error => {
                    this.err=error;
                });
        }
    }
</script>

<style scoped>
    .container {
        color: black;
    }
</style>