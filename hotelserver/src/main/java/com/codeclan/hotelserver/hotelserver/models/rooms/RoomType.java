package com.codeclan.hotelserver.hotelserver.models.rooms;

public enum RoomType {
    SINGLE(1),
    TWIN(2),
    DOUBLE(2),
    FAMILY(4);

    final int capacity;

    RoomType(int capacity) {
        this.capacity = capacity;
    }

    public int getCapacity() {
        return capacity;
    }
}
