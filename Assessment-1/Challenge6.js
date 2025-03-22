
class LRUCache { 
    constructor(capacity) { 
        this.capacity = capacity;
        this.cache = {};
        this.sequence = [];
    } 
    get(key) { 
        if(!(key in this.cache)){
            return -1;
        }

        const index = this.sequence.indexOf(key);
        this.sequence.splice(index, 1);
        this.sequence.push(key); 

        return this.cache[key];
    } 
    put(key, value) { 
        if(key in this.cache){
            const index = this.sequence.indexOf(key);
            this.sequence.splice(index, 1);
        
        } else if (this.sequence.length>=this.capacity){
            const leastUsed = this.sequence.shift();
            delete this.cache[leastUsed];

        }

        this.cache[key] = value;
        this.sequence.push(key);

    }
} 
// Example: 
const cache = new LRUCache(2); 
cache.put(1, 1); 
cache.put(2, 2); 
cache.get(1); // 1 
cache.put(3, 3); // Removes key 2 
cache.get(2); // null 
console.log(cache);
